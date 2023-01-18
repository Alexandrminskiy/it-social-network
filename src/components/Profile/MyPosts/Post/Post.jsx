import s from './Post.module.css'

const Post = (props) => {
// console.log(props.message);
    return (
        <div className={s.item}>
            <img src='https://img.huffingtonpost.com/asset/576830791500002b0073b83b.jpeg?cache=myyphqqbpi&amp;ops=1778_1000' />

           { props.message }
            
            <div>
                <span>like </span>
                { props.likeCount }
            </div>
        </div>
    )
}

export default Post;