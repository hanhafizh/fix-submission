const assert = require("assert");

Feature("Liking Movies");

Before(({ I }) => {
  I.amOnPage("/");
});

// Menyukai salah satu restoran.
Scenario("liking one Resto", async ({ I }) => {
  I.seeElement(".restaurant-list_content a");

  const restaurantTittle = locate(".restaurant-list_content h3").first();
  const getRestaurantTittle = await I.grabTextFrom(restaurantTittle);

  I.seeElement(".restaurant-list_content a");
  I.click(locate(".restaurant-list_content a").first());

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/like");
  const getRestaurantTitleDetail = await I.grabTextFrom(
    ".restaurant-list_content h3"
  );
  assert.strictEqual(getRestaurantTittle, getRestaurantTitleDetail);

  // Batal menyukai restoran
  I.click(locate(".restaurant-list_content a").first());
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/like");
  I.dontSeeElement(getRestaurantTitleDetail, ".restaurant-list_content h3");
});
