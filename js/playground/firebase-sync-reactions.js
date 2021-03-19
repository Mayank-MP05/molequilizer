const get_from_FB = () => {
  const db = firebase.firestore();
  let events = db.collection("reactions");
  events.get().then((querySnapshot) => {
    const tempDoc = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    console.log(tempDoc);
    GiantDB = GiantDB.concat(tempDoc);
    fetchReactions();
  });
};
get_from_FB();
