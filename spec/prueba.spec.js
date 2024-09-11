/*describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});*/

const { Repository, Activity } = require("../scripts/index");
describe("La clase Repository: ", () => {
  it("Debe ser una clase", () => {
    expect(typeof Repository.prototype.constructor).toBe("function");
  });
  it("Debe tener implementado el método getAllActivities()", () => {
    let repository = new Repository();
    expect(repository.getAllActivities).toBeDefined();
  });
  it("Debe tener implementado el método createActivity()", () => {
    let repository = new Repository();
    expect(repository.createActivity).toBeDefined();
  });
  it("Debe tener implementado el método deleteActivity()", () => {
    let repository = new Repository();
    expect(repository.deleteActivity).toBeDefined();
  });
  it("El método getAllActivities() debe retornar un array", () => {
    let repository = new Repository();
    expect(Array.isArray(repository.getAllActivities())).toBeTruthy();
  });
  it("El método createActivity() debe agregar un elemento", () => {
    let repository = new Repository();
    repository.createActivity(
      "Perro",
      "Guau",
      "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
    );
    expect(repository.getAllActivities()).toEqual([
      new Activity(
        0,
        "Perro",
        "Guau",
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
      ),
    ]);
  });
  it("El método deleteActivity() debe eliminar la ultima actividad", () => {
    let repository = new Repository();
    repository.createActivity(
      "Perro",
      "Guau",
      "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
    );
    repository.createActivity(
      "Gato",
      "Miau",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FGato_atigrado&psig=AOvVaw1bB_agyE3rtVYIIiNwMA5D&ust=1726016195557000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDX78aVt4gDFQAAAAAdAAAAABAE"
    );
    repository.createActivity(
      "Gallo",
      "Cocoroco",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Male_and_female_chicken_sitting_together.jpg/640px-Male_and_female_chicken_sitting_together.jpg"
    );
    repository.deleteActivity(1);
    expect(repository.getAllActivities()).toEqual([
      new Activity(
        0,
        "Perro",
        "Guau",
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
      ),
      new Activity(
        2,
        "Gallo",
        "Cocoroco",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Male_and_female_chicken_sitting_together.jpg/640px-Male_and_female_chicken_sitting_together.jpg"
      ),
    ]);
    expect(repository.getAllActivities()).not.toEqual([
      new Activity(
        0,
        "Perro",
        "Guau",
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
      ),
      new Activity(
        1,
        "Gato",
        "Miau",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FGato_atigrado&psig=AOvVaw1bB_agyE3rtVYIIiNwMA5D&ust=1726016195557000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDX78aVt4gDFQAAAAAdAAAAABAE"
      ),
      new Activity(
        2,
        "Gallo",
        "Cocoroco",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Male_and_female_chicken_sitting_together.jpg/640px-Male_and_female_chicken_sitting_together.jpg"
      ),
    ]);
  });
});
