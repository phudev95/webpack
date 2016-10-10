let login = (username, password) => {
	if(username !== 'admin'  || password !== 'radical') {
		console.log('incorrect login');
	}
	else {
		console.log('Login successfully!');
	}
};

export const test_const = 'abcdef';
export {login};
