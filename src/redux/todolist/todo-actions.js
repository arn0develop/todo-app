import { create_UUID } from '../../utils/generateId';

export const createTodo = (a) => ({
  
  type: "createTodo",
  payload: {
    id: create_UUID(),
    payload: a,
    active:false,
    classCol:''
  },
  
});

export const IsActive = (a) =>{ 
	return {
		type:"IsActive", 
		value:a
	}
};

export const ActiveColor = (a) =>{ 
	return {
		type:"ActiveColor", 
		value:a
	}
};


export const SetSelectedtodo = (a) =>{ 
	return {
		type:"SetSelectedtodo", 
		value:a
	}
};