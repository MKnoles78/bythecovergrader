import React from 'react';

const Forms = () => {
    return (
        <div>
        <form>
        <div className="form-group">
            <label for="formGroupExampleInput">Example label</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
        </div>
        <div className="form-group">
            <label for="formGroupExampleInput2">Another label</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
        </div>
        </form>
        </div>
    );
};

export default Forms;