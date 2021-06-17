import "./write.css"

export default function write() {
    return (
            <div className="write">
                <img className="Writeimage" src="https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-2649403.jpg&fm=jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" 
                    placeholder="Title" 
                    className="writeInput" 
                    autoFocus={true}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                    placeholder="Tell your story..." 
                    type="text"
                    className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
