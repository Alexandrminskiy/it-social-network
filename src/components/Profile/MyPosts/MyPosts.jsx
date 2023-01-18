import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>add</button>

            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likeCount = '12' />
                <Post message='Its my first post' likeCount = '15' />
            </div>
        </div>
    )
}

export default MyPosts;