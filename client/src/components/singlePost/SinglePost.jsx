
import "./singlepost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?cs=srgb&dl=pexels-irina-iriser-1408221.jpg&fm=jpg"
                alt="">
                </img>
                <h1 className="singlePostTitle">
                    This is a Title
                    <div className="singlePostEdit">
                        <i className="singlePostItem far fa-edit"></i>
                        <i className="singlePostItem far fa-trash-alt"></i>                    
                        </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Sanjida Afreen</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                Canada is one of the best countries in the world to live in. First, Canada has an excellent health care system. All Canadians have access to medical services at a reasonable price. Second, Canada has a high standard of education. Students are taught by well‐trained
            teachers and are encouraged to continue studying at university. Finally, Canada's cities are clean and efficiently managed.
            Canada is one of the best countries in the world to live in. First, Canada has an excellent health care system. All Canadians have access to medical services at a reasonable price. Second, Canada has a high standard of education. Students are taught by well‐trained
            teachers and are encouraged to continue studying at university. Finally, Canada's cities are clean and efficiently managed.
            Canada is one of the best countries in the world to live in. First, Canada has an excellent health care system. All Canadians have access to medical services at a reasonable price. Second, Canada has a high standard of education. Students are taught by well‐trained
            teachers and are encouraged to continue studying at university. Finally, Canada's cities are clean and efficiently managed.
            Canada is one of the best countries in the world to live in. First, Canada has an excellent health care system. All Canadians have access to medical services at a reasonable price. Second, Canada has a high standard of education. Students are taught by well‐trained
            teachers and are encouraged to continue studying at university. Finally, Canada's cities are clean and efficiently managed.
            Canada is one of the best countries in the world to live in. First, Canada has an excellent health care system. All Canadians have access to medical services at a reasonable price. Second, Canada has a high standard of education. Students are taught by well‐trained
            teachers and are encouraged to continue studying at university. Finally, Canada's cities are clean and efficiently managed.
                </p>
            </div>
        </div>
    );
}
