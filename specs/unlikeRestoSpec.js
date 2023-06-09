import FavoriterestoIdb from "../src/scripts/data/favorite-resto-idb";
import * as TestFactories from "./helpers/testFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Unliking A resto", () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriterestoIdb.putresto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriterestoIdb.deleteresto(1);
  });

  it("should display unlike widget when the resto has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeTruthy();
  });

  it("should not display like widget when the resto has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeFalsy();
  });

  it("should be able to remove liked resto from the list", async () => {
    await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });

    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriterestoIdb.getAllrestos()).toEqual([]);
  });

  it("should not throw error if the unliked resto is not in the list", async () => {
    await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });

    // hapus dulu film dari daftar film yang disukai
    await FavoriterestoIdb.deleteresto(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriterestoIdb.getAllrestos()).toEqual([]);
  });
});
