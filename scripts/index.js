class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
  }
  getAllActivities() {
    this.activities.forEach((element) => console.log(element));
  }
  createActivity(id, title, description, imgUrl) {
    let activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }
  deleteActivity(id){
    this.activities = this.activities.filter(element => element.id != id);
  }
}
