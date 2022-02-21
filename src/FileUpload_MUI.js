import { useState } from 'react';
import FileUpload from 'react-material-file-upload';

import React from 'react'

export default function FileUpload_MUI() {
    const [files, setFiles] = useState() //<File[]>([]);
    return (
        <div>
    <FileUpload value={files} onChange={setFiles} />;
        </div>
    )
}
