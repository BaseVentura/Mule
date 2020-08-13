import React, { Component } from "react";

import OrgaList from "../Components/Organisations/OrgaList/OrgaList";
import LabelControl from "../Components/Categories/LabelControl";
import Aux from "../hoc/Aux";

import style from "./Orgamanager.module.css";
import { createOrga, getAllOrgas, removeOrga } from "../API/index";

class Orgamanager extends Component {
  state = {
    orgas: [],
    newOrgas: [],
    labels: [
      { name: "Soziales", id: 0 },
      { name: "Umwelt", id: 1 },
      { name: "Mobilität", id: 2 },
      { name: "Politik", id: 3 },
      { name: "Kultur", id: 4 },
      { name: "Interkulturelles", id: 5 },
      { name: "Senioren Hilfe", id: 6 },
    ],
    job: [{ name: "", description: "", startingDate: "", id: 0, OrgaId: 0 }],
    showOrgaAdder: false,
    activeFilterID: [],
    showDeleteOrgaModal: false,
  };
  componentDidMount() {
    getAllOrgas.then((res) => {
      this.setState({ newOrgas: res });
      const orgas = res.map((item) => {
        item.data.Id = item.ref.id;
        return item.data;
      });
      console.log(orgas);
      console.log(this.state.newOrgas);
      this.setState({ orgas });
    });
  }
  toggleOrgaAdder = () => {
    this.setState({ showOrgaAdder: !this.state.showOrgaAdder });
  };

  addOrga = (name, URL, LabelIds, Id) => {
    const orgas = [...this.state.orgas];
    const newOrga = { name, URL, LabelIds };

    orgas.push(newOrga);

    //this.setState({ orgas: orgas });

    createOrga(newOrga).then((ret) => this.setState({ newOrgas: ret }));
  };

  deleteOrga = (id) => {
    const orgas = [...this.state.orgas];
    const targetOrga = orgas.find((orga) => orga.Id === id);

    console.log(`Delete Orga:${id}`);

    orgas.splice(orgas.indexOf(targetOrga), 1);
    this.setState({ orgas: orgas });
    removeOrga(id);
  };
  deleteOrgaHandler(id) {
    this.setState({ showDeleteOrgaModal: true });
    //deleteOrga();
  }

  updateFilterArray = (filter) => {
    const Filter = [...this.state.activeFilterID];
    !Filter.includes(filter)
      ? Filter.push(filter)
      : Filter.splice(Filter.indexOf(filter), 1);
    this.setState({ activeFilterID: Filter });
  };

  render() {
    return (
      <Aux>
        <div className={style.Orgamanager}>
          <div className={style.FilterBar}>
            {this.state.labels.map((label) => (
              <LabelControl
                labelIds={this.state.activeFilterID}
                LabelName={label.name}
                id={label.id}
                key={label.id}
                clicked={() => this.updateFilterArray(label.id)}
              />
            ))}
          </div>
          <div className="OrgaManagerContent">
            <OrgaList
              labels={this.state.labels}
              orgas={this.state.newOrgas}
              filter={this.state.activeFilterID}
              clickDelete={this.deleteOrga}
              addOrga={this.addOrga}
            />
          </div>
        </div>
      </Aux>
    );
  }
}

export default Orgamanager;
