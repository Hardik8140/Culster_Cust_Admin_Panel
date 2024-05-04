import axios from "axios";
import {
  CLEANUP,
  ERROR,
  FETCH_MENU_ITEM_FAILURE,
  FETCH_MENU_ITEM_REQUEST,
  FETCH_MENU_ITEM_SUCCESS,
  GOT_ITEMS_INGREDIANTS,
  LOADING,
} from "../actionType";
import { itemsIngrediants, backendAPI } from "../../data";

export const get_Ingrediants = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(`${itemsIngrediants}${id}`);
    res = await res.data;
    if (res.success) {
      dispatch({ type: GOT_ITEMS_INGREDIANTS, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const getMenuItem = () => async (dispatch) => {
  dispatch({ type: FETCH_MENU_ITEM_REQUEST });
  try {
    let res = await axios.get(`${backendAPI}api/item/category`);
    dispatch({ type: FETCH_MENU_ITEM_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: FETCH_MENU_ITEM_FAILURE, payload: error.message });
  }
};

export const uploadImage = (imageData, handleNavigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.post(`${backendAPI}admin/uploadImage`, imageData);
    res = await res.data;
    if (res.success) {
      dispatch({ type: CLEANUP });
      handleNavigate();
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};
export const addNewPizza = (pizzaData, handleNavigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.post(`${backendAPI}admin/add/item`, pizzaData);
    res = await res.data;
    if (res.success) {
      dispatch({ type: CLEANUP });
      handleNavigate("Pizza added successfully");
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const updatePizza =
  (pizzaData, pizzaId, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(
        `${backendAPI}admin/updateitem?itemId=${pizzaId}`,
        pizzaData
      );
      res = await res.data;
      if (res.success) {
        handleNavigate("Pizza updated successfully");
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

export const deletePizza = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(`${backendAPI}admin/deleteitem?itemId=${id}`);
    res = await res.data;
    if (res.success) {
      dispatch({ type: CLEANUP });
      // dispatch({ type: ADDED_NEW_PIZZA, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

// Burger action
export const addNewBurger =
  (burgerData, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(`${backendAPI}admin/add/item`, burgerData);
      res = await res.data;
      if (res.success) {
        dispatch({ type: CLEANUP });
        handleNavigate("Burger added successfully!");
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

export const updateBurger =
  (burgerData, burgerId, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(
        `${backendAPI}admin/updateitem?itemId=${burgerId}`,
        burgerData
      );
      res = await res.data;
      if (res.success) {
        handleNavigate("Burger updated successfully!");
        dispatch({ type: CLEANUP });
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

// house of wings action
export const addNewHouseOfWings =
  (wingsData, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(`${backendAPI}admin/add/item`, wingsData);
      res = await res.data;
      if (res.success) {
        dispatch({ type: CLEANUP });
        handleNavigate("New House of wings added successfully!");
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

export const updateHouseOfWings =
  (wingsData, wingsId, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(
        `${backendAPI}admin/updateitem?itemId=${wingsId}`,
        wingsData
      );
      res = await res.data;
      if (res.success) {
        handleNavigate("House of wings updated successfully!");
        dispatch({ type: CLEANUP });
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

// pasta action
// nanza action
export const addNewNanza = (nanzaData, handleNavigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.post(`${backendAPI}admin/add/item`, nanzaData);
    res = await res.data;
    if (res.success) {
      dispatch({ type: CLEANUP });
      handleNavigate("New Nanza added successfully!");
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};
export const updateNanza =
  (nanzaData, nanzaId, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(
        `${backendAPI}admin/updateitem?itemId=${nanzaId}`,
        nanzaData
      );
      res = await res.data;
      if (res.success) {
        handleNavigate("Nanza updated successfully!");
        dispatch({ type: CLEANUP });
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

// cheesy fun
export const addNewCheesyFun =
  (cheesyFunData, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(`${backendAPI}admin/add/item`, cheesyFunData);
      res = await res.data;
      if (res.success) {
        dispatch({ type: CLEANUP });
        handleNavigate("New Cheesy Fun added successfully!");
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

export const updateCheesyFun =
  (cheesyFunData, cheesyFunId, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(
        `${backendAPI}admin/updateitem?itemId=${cheesyFunId}`,
        cheesyFunData
      );
      res = await res.data;
      if (res.success) {
        handleNavigate("Cheesy Fun updated successfully!");
        dispatch({ type: CLEANUP });
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
// sides action
export const addNewSides = (sidesData, handleNavigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.post(`${backendAPI}admin/add/item`, sidesData);
    res = await res.data;
    if (res.success) {
      dispatch({ type: CLEANUP });
      handleNavigate("New Sides added successfully!");
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const updateSides =
  (sidesData, sidesId, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(
        `${backendAPI}admin/updateitem?itemId=${sidesId}`,
        sidesData
      );
      res = await res.data;
      if (res.success) {
        handleNavigate("Sides updated successfully!");
        dispatch({ type: CLEANUP });
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

// sweet Treat action
export const addNewSweetTreat =
  (sweetTreatData, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(`${backendAPI}admin/add/item`, sweetTreatData);
      res = await res.data;
      if (res.success) {
        dispatch({ type: CLEANUP });
        handleNavigate("New Sweet Treat added successfully!");
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

export const updateSweetTreat =
  (sweetTreatData, sweetTreatId, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(
        `${backendAPI}admin/updateitem?itemId=${sweetTreatId}`,
        sweetTreatData
      );
      res = await res.data;
      if (res.success) {
        handleNavigate("Sweet Treat updated successfully!");
        dispatch({ type: CLEANUP });
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

// dippingsauces action

export const addNewDippingSauces =
  (dippingSauceData, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(
        `${backendAPI}admin/add/item`,
        dippingSauceData
      );
      res = await res.data;
      if (res.success) {
        dispatch({ type: CLEANUP });
        handleNavigate("New Dipping Sauces added successfully!");
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

export const updateDippingSauces =
  (dippingSauceData, dippingSaucesId, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(
        `${backendAPI}admin/updateitem?itemId=${dippingSaucesId}`,
        dippingSauceData
      );
      res = await res.data;
      if (res.success) {
        handleNavigate("Dipping Sauces updated successfully!");
        dispatch({ type: CLEANUP });
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

// thick shakes action

export const addNewThickShakes =
  (thickShakeData, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(`${backendAPI}admin/add/item`, thickShakeData);
      res = await res.data;
      if (res.success) {
        dispatch({ type: CLEANUP });
        handleNavigate("New Thick Shake added successfully!");
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

export const updateThickShakes =
  (ThickShakeData, ThickShakeId, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(
        `${backendAPI}admin/updateitem?itemId=${ThickShakeId}`,
        ThickShakeData
      );
      res = await res.data;
      if (res.success) {
        handleNavigate("Thick Shakes updated successfully!");
        dispatch({ type: CLEANUP });
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

// drinks can pop action

export const addNewDrinksCanPop =
  (drinksCanPopData, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(
        `${backendAPI}admin/add/item`,
        drinksCanPopData
      );
      res = await res.data;
      if (res.success) {
        dispatch({ type: CLEANUP });
        handleNavigate("New Drinks Can Pop added successfully!");
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };

export const updateDrinksCanPop =
  (drinksCanPopData, DrinkscanId, handleNavigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(
        `${backendAPI}admin/updateitem?itemId=${DrinkscanId}`,
        drinksCanPopData
      );
      res = await res.data;
      if (res.success) {
        handleNavigate("Drinks Can Pop updated successfully!");
        dispatch({ type: CLEANUP });
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
