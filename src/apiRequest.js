const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        if (!Response.ok) throw Error('Please reload app');
    } catch (err) {
        errMsg = err.message;    
    } finally {
        return errMsg;
    }
}

export default apiRequest;