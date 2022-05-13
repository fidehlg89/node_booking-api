hanldeError = {}

hanldeError.handleErrorReport = (err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something";
    return res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
}

hanldeError.createError = (status, message) => {
    const err = new Error();
    err.message = message;
    err.status = status;
    return err;
}

module.exports = hanldeError;