// Add a new document in collection "cities"
const updateToFirebase = (email, updatedArr) => {
  // User exist show the Progress
  db.collection("progress")
    .doc(email)
    .set({
      arr: updatedArr,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};
