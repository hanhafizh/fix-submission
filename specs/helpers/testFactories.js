import LikeButtonPresenter from "../../src/scripts/utils/like-button-initiator";

const createLikeButtonPresenterWithresto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    resto,
  });
};

export { createLikeButtonPresenterWithresto };
