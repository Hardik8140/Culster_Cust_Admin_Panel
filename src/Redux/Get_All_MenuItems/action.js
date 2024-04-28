import axios from "axios";
import {
  ERROR,
  GET_BURGER,
  GET_CHEESY_FUN,
  GET_DEEPING_SAUCES,
  GET_DRINKS_CAN_POP,
  GET_HOME_MADE_DRINKS,
  GET_HOUSE_OF_WINGS,
  GET_NANZA,
  GET_PASTA,
  GET_PIZZA,
  GET_SALADS,
  GET_SIDES,
  GET_SWEET_TREET,
  GET_THEEK_SHAKE,
  LOADING,
} from "../actionType";

export const get_Added_Pizza = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/getitem?categoryId=180002`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_PIZZA, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const get_Added_Burger = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/getitem?categoryId=180004`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_BURGER, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const get_Added_HoW = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/getitem?categoryId=180005`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_HOUSE_OF_WINGS, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const get_Added_Pasta = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/getitem?categoryId=180006`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_PASTA, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const get_Added_Nanza = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/getitem?categoryId=180007`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_NANZA, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const get_Added_Cheesy_Fun = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/getitem?categoryId=180008`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_CHEESY_FUN, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const get_Added_Sides = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/getitem?categoryId=180009`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_SIDES, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const get_Added_Salads = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/getitem?categoryId=180010`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_SALADS, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const get_Added_Sweet_Treet = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/getitem?categoryId=180011`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_SWEET_TREET, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const get_Added_Deeping_Sauces = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/getitem?categoryId=180012`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_DEEPING_SAUCES, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const get_Added_Thick_Shake = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/getitem?categoryId=180013`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_THEEK_SHAKE, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const get_Added_Drinks_Can_Pop = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/getitem?categoryId=180014`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_DRINKS_CAN_POP, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const get_Added_Home_Made_ = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/getitem?categoryId=180015`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_HOME_MADE_DRINKS, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};
