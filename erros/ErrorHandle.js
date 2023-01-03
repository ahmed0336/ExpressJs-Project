 class ErrorHandle {
    constructor(status, msg) {
 
        this.status =status;
        this.message = msg;

    }
// class ka object banya hai new se
    static validationError(message = 'All Fields are Required!'){
        return new ErrorHandle (422 , message);
    }

    static notFoundError(message = 'Not found!'){
        return new ErrorHandle (404 , message);
    }

 }

 module.exports =ErrorHandle;



//  static methods ==>no new to call him using object