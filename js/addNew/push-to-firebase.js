const push_to_DB = (reactionObj, successFn, ErrorFn) => {
  const db = firebase.firestore();
  db.collection("reactions")
    .doc("LA")
    .set(reactionObj)
    .then(() => {
      console.log("Reaction added successfully to DB");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};
