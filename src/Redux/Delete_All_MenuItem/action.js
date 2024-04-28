import axios from "axios";
import {
  ERROR,
  DELETE_BURGER,
  DELETE_CHEESY_FUN,
  DELETE_DEEPING_SAUCES,
  DELETE_DRINKS_CAN_POP,
  DELETE_HOME_MADE_DRINKS,
  DELETE_HOUSE_OF_WINGS,
  DELETE_NANZA,
  DELETE_PASTA,
  DELETE_PIZZA,
  DELETE_SALADS,
  DELETE_SIDES,
  DELETE_SWEET_TREET,
  DELETE_THEEK_SHAKE,
  LOADING,
} from "../actionType";
import {
  get_Added_Burger,
  get_Added_Cheesy_Fun,
  get_Added_Deeping_Sauces,
  get_Added_Drinks_Can_Pop,
  get_Added_HoW,
  get_Added_Home_Made_,
  get_Added_Nanza,
  get_Added_Pasta,
  get_Added_Pizza,
  get_Added_Salads,
  get_Added_Sides,
  get_Added_Sweet_Treet,
  get_Added_Thick_Shake,
} from "../Get_All_MenuItems/action";

export const delete_Added_Pizza = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteitem?itemId=${id}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: DELETE_PIZZA, payload: res.data });
      dispatch(get_Added_Pizza());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const delete_Added_Burger = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteitem?itemId=${id}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: DELETE_BURGER, payload: res.data });
      dispatch(get_Added_Burger());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const delete_Added_HoW = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteitem?itemId=${id}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: DELETE_HOUSE_OF_WINGS, payload: res.data });
      dispatch(get_Added_HoW());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const delete_Added_Pasta = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteitem?itemId=${id}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: DELETE_PASTA, payload: res.data });
      dispatch(get_Added_Pasta());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const delete_Added_Nanza = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteitem?itemId=${id}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: DELETE_NANZA, payload: res.data });
      dispatch(get_Added_Nanza());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const delete_Added_Cheesy_Fun = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteitem?itemId=${id}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: DELETE_CHEESY_FUN, payload: res.data });
      dispatch(get_Added_Cheesy_Fun());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const delete_Added_Sides = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteitem?itemId=${id}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: DELETE_SIDES, payload: res.data });
      dispatch(get_Added_Sides());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const delete_Added_Salads = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteitem?itemId=${id}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: DELETE_SALADS, payload: res.data });
      dispatch(get_Added_Salads());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const delete_Added_Sweet_Treet = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteitem?itemId=${id}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: DELETE_SWEET_TREET, payload: res.data });
      dispatch(get_Added_Sweet_Treet());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const delete_Added_Deeping_Sauces = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteitem?itemId=${id}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: DELETE_DEEPING_SAUCES, payload: res.data });
      dispatch(get_Added_Deeping_Sauces());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const delete_Added_Thick_Shake = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteitem?itemId=${id}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: DELETE_THEEK_SHAKE, payload: res.data });
      dispatch(get_Added_Thick_Shake());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const delete_Added_Drinks_Can_Pop = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteitem?itemId=${id}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: DELETE_DRINKS_CAN_POP, payload: res.data });
      dispatch(get_Added_Drinks_Can_Pop());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const delete_Added_Home_Made_ = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteitem?itemId=${id}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: DELETE_HOME_MADE_DRINKS, payload: res.data });
      dispatch(get_Added_Home_Made_());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};
