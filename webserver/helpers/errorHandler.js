const errorHandler = (error, res) => {
    console.log("In errorHandler", error);
    res.status(error.status || 500)
    res.json({
        message: error.message,
        status: error.status
    });
}

module.exports = errorHandler;