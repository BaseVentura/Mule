import { client, q } from "../config/db";

export const getAllOrgas = client
  .query(q.Paginate(q.Match(q.Ref("indexes/all_orgas"))))
  .then((response) => {
    const orgaRef = response.data;
    const getAllDataQuery = orgaRef.map((ref) => {
      return q.Get(ref);
    });
    return client.query(getAllDataQuery).then((data) => data);
  })
  .catch((error) => console.error("Error: ", error.message));

export const createOrga = (orga) => {
  return (
    client
      .query(
        q.Create(q.Collection("Organisations"), {
          data: orga,
        })
      )
      /*.then((ret) => {
      //console.log("Response: ", ret);
      //return ret;
    })*/
      .catch((error) => console.error("Error in createOrga: ", error.message))
  );
};
export const removeOrga = (orgaId) => {
  client
    .query(q.Delete(q.Ref(q.Collection("Organisations"), orgaId)))
    .then((ret) => ret)
    .catch((error) => console.error("Error in deleteOrga: ", error.message));
};
