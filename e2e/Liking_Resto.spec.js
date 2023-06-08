/* eslint-disable no-undef */
const assert = require("assert");
Feature("Liking Restaurant");
Before(({ I }) => {
  I.amOnPage("/");
  I.wait(5);
});
// Menyukai salah satu restoran.
Scenario("liking one Resto and unliking it", async ({ I }) => {
  I.seeElement(".restaurant-list_content a");
  const restaurantTittle = locate(".restaurant-list_content h3").first();
  const getRestaurantTittle = await I.grabTextFrom(restaurantTittle);
  I.seeElement(".restaurant-list_content a");
  I.wait(5);
  I.click(locate(".restaurant-list_content a").first());
  I.wait(5);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/like");
  I.wait(5);
  const getRestaurantTitleDetail = await I.grabTextFrom(
    ".restaurant-list_content h3"
  );
  assert.strictEqual(getRestaurantTittle, getRestaurantTitleDetail);
  // Batal menyukai restoran
  I.click(locate(".restaurant-list_content a").first());
  I.wait(5);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/like");
  I.wait(5);
  I.dontSeeElement(getRestaurantTitleDetail, ".restaurant-list_content h3");
});
