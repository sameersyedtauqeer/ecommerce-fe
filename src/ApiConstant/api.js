export const baseUrl = 'http://localhost:5000/api/'

export const category = 'category'

// function to make GET request

export const fetchData = async (url) => {
    try {
        const res = await fetch(baseUrl + url, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
            })
        });
        return await res.json();
    }
    catch (error) {
        throw new Error("error ")
    }
}

// function to make POST request 

export const postData = async (url, data) => {
    try {
        const res = await fetch(baseUrl + url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data),
        });
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

// function to make GET single product request 

// export const singleProduct = async (url, data) => {
//     try {
//         const res = await fetch(baseUrl + url, {
//             method: 'POST',
//             headers: new Headers({
//                 'Content-Type': 'application/json'
//             }),
//             body: JSON.stringify(data),
//         });
//         return await res.json()
//     } catch (error) {
//         console.log(error)
//     }
// }

export const getSingleProduct = async (url, id) => {
    try {
        const res = await fetch(baseUrl + `${url}/${id}`, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'Application/json'
            }),
        })
        return await res.json()

    }
    catch (error) {
        console.log(error)
    }
}

export const getSingleOrder = async (url) => {
    try {
        const res = await fetch(baseUrl + `${url}`, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'Application/json'
            }),
        })
        return await res.json()

    }
    catch (error) {
        console.log(error)
    }
}

// function to make Product request

export const postProductData = async (url, data) => {
    try {
        // const headers = {"Content-Type":"application/json","Accept":'application/json'};
        // if(typeof data != 'string') {
        //     headers['Content-Type'] = 'multipart/form-data';
        // }
        const res = await fetch(baseUrl + url, {
            method: 'POST',
            body: data,
            // headers
        });
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

//  function to update products
export const updateProductData = async (url, data) => {
    try {
        // const headers = {"Content-Type":"application/json","Accept":'application/json'};
        // if(typeof data != 'string') {
        //     headers['Content-Type'] = 'multipart/form-data';
        // }
        const res = await fetch(baseUrl + url, {
            method: 'PUT',
            body: data,
            // headers
        });
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}



// function to make PUT request 

export const putData = async (url, data) => {
    try {
        const res = await fetch(baseUrl + url, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        });
        return await res.json()
    }
    catch (error) {
        console.log(error)
    }
}


// function to make DELETE request

export const deleteData = async (url, id) => {
    try {
        const res = await fetch(baseUrl + `${url}/${id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Accept': 'Application/json'
            }),
        })
        return await res.json()

    }
    catch (error) {
        console.log(error)
    }
}