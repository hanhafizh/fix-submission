import FavoriterestoIdb from "../src/scripts/data/favorite-resto-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Liking A resto", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show the like button when the resto has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the resto has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeFalsy();
  });

  it("should be able to like the resto", async () => {
    await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const resto = await FavoriterestoIdb.getresto(1);

    expect(resto).toEqual({ id: 1 });

    FavoriterestoIdb.deleteresto(1);
  });

  it("should not add a resto again when its already liked", async () => {
    await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriterestoIdb.putresto({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    // tidak ada film yang ganda
    expect(await FavoriterestoIdb.getAllrestos()).toEqual([{ id: 1 }]);

    FavoriterestoIdb.deleteresto(1);
  });

  it("should not add a resto when it has no id", async () => {
    await TestFactories.createLikeButtonPresenterWithresto({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriterestoIdb.getAllrestos()).toEqual([]);
  });
});
