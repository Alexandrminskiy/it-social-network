import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>add</button>
            </div>
            <div className={s.posts}>
                <Post messege='Hi, how are you?' />
                <Post messege='It"s my first post '/>
            </div>
        </div>
    )
}

export default MyPosts;