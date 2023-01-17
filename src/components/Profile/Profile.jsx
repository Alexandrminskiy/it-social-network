import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://avatars.mds.yandex.net/i?id=539f665457adb11268ea6a668dc25ac69236f833-7675486-images-thumbs&n=13&exp=1'></img>
        </div>
        <div>
            ava
        </div>
        <MyPosts />
    </div>
}

export default Profile;