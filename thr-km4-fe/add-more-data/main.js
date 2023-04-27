function addMoreData(object, key, value) {
  return Object.assign(object, {[key]: value});
}
  let people = {nama: 'Edo',age: 20};
  let newPeople = addMoreData(people,'address','Jakarta');
  console.log(newPeople);

  let hobbies = ['coding','reading'];
  let newhobbies = addMoreData(people,'hobbies',hobbies);
  console.log(newhobbies);

  let isMarried = false;
  let newStatus = addMoreData(people,'isMarried',isMarried);
  console.log(newStatus);

