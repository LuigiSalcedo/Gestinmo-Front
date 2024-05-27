const baseURL = "http://localhost:8080"


const handleResponse = async (response) => {
  let result = {
    success: false,
    data: null,
    error: null,
    statusCode: null
  }
  if (!response.ok) {
    const errorText = await response.text(); // Obtener la respuesta como texto
    let errorData;
    try {
      errorData = await JSON.parse(errorText); // Intentar parsear como JSON
    } catch (e) {
      result.error = errorText || 'Error en la solicitud'; // Usar el texto de la respuesta si no es JSON
      return result;
    }
    result.error = errorData.message || 'Error en la solicitud';
    return result;
  }
  
  const text = await response.text(); // Obtener la respuesta como texto
  result.success = true;
  result.data = text ? JSON.parse(text) : {};
  result.statusCode = response.status;
  return  result// Parsear como JSON si no está vacío
};

  const api = {
    get: async (endpoint, token) => {

        const response = await fetch(`${baseURL}${endpoint}`, {
          method: 'GET',
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'accept': '*/*'
          }
        })
        return handleResponse(response);
      
    },
  
    post: async (endpoint, data, token) => {
      const response = await fetch(`${baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'accept': '*/*'
        },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    login: async(endpoint, data)=>{
        const response = await fetch(`${baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': '*/*',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data),
        });
        return handleResponse(response);
    },
  
    put: async (endpoint, data, token) => {
      const response = await fetch(`${baseURL}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
  
    delete: async (endpoint, token) => {
      const response = await fetch(`${baseURL}${endpoint}`, {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      return handleResponse(response);
    },
  };
  
  export default api;