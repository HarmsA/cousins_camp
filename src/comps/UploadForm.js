import React, {useState} from 'react';
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] =useState(null);

    const types = ['image/png', 'image/jpeg', 'image/tiff', 'image/gif'];

    const changeHandler = event => {
        let selected = event.target.files[0];
        console.log(selected.type);
        console.log(selected.name);
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError("Please selecte an image file (png, jpeg, tiff, or gif).");
        }
    };

    return (
        <form action="">
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className='error'>{error }</div> }
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile}/> }
            </div>
        </form>
    )
};

export default UploadForm;