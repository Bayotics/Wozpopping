import {
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined,
    DeleteOutline,
    SendOutlined
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme, InputBase } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";
import { format } from "date-fns";

const PostWidget = ({
    postId,
    postUserId,
    name,
    description,
    location,
    picturePath,
    userPicturePath,
    likes,
    comments,
    createdAt
}) => {
    var date = new Date(createdAt)

    var formatDate = format(date, "MMMM, do, yyyy H:mma");

    const [isComments, setIsComments] = useState(false);
    const [inputComment, setInputComment] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user._id);
    const isLiked = Boolean(likes[loggedInUserId]);
    const likeCount = Object.keys(likes).length;


    const { palette } = useTheme();
    const main = palette.neutral.main;
    const primary = palette.primary.main;

    const patchLike = async () => {
        // const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
            const response = await fetch(`https://wozpopping.onrender.com/posts/${postId}/like`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: loggedInUserId }),
        });
        const updatedPost = await response.json();
        console.log(updatedPost)
        dispatch(setPost({ post: updatedPost }));
    };
    const setDelete = async (id) => {
        console.log(id);
        console.log(postId)
        // await fetch(`http://localhost:3001/posts/${postId}`, {
            await fetch(`https://wozpopping.onrender.com/posts/${postId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: null
        })
    }


    // console.log(comment)
    // console.log(comments)
    // const setComments = async (comment) => {
    //   console.log(comment);
    //   console.log(comments);
    // const response = await fetch(`http://localhost:3001/posts/${comments}`, {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    // const fetchedComment = await response.json();
    // console.log(fetchedComment);
    // dispatch(setComments({}))
    // }

    // const displayComments = () => {

    //   setIsComments(!isComments)
    //   // setInputComment(!inputComment);
    // }

    return (
        <WidgetWrapper m="2rem 0">
            <DeleteOutline onClick={() => setDelete(postId)} sx={{ color: primary }} />
            <Friend
                friendId={postUserId}
                name={name}
                subtitle={location}
                userPicturePath={userPicturePath}
            />
            <Typography color={main} sx={{ mt: "1rem" }}>
                {description}
            </Typography>
            <h6 className="date" style={{ color: "grey", fontSize: "1px" }}> */}
      <Typography>{formatDate}</Typography>
            </h6>
            {picturePath && (
                <img
                    width="100%"
                    height="auto"
                    alt="post"
                    style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
                    // src={`http://localhost:3001/assets/${picturePath}`}
                    src={`https://wozpopping.onrender.com/assets/${picturePath}`}
                />
            )}
            <FlexBetween mt="0.25rem">
                <FlexBetween gap="1rem">
                    <FlexBetween gap="0.3rem">
                        <IconButton onClick={patchLike}>
                            {isLiked ? (
                                <FavoriteOutlined sx={{ color: primary }} />
                            ) : (
                                    <FavoriteBorderOutlined />
                                )}
                        </IconButton>
                        <Typography>{likeCount}</Typography>
                    </FlexBetween>

                    <FlexBetween gap="0.3rem">
                        <IconButton onClick={() => setIsComments(!isComments)}>
                            <ChatBubbleOutlineOutlined />
                        </IconButton>
                        {/* <Typography>{comments.length}</Typography> */}
                    </FlexBetween>
                </FlexBetween>

                <IconButton>
                    <ShareOutlined />
                </IconButton>
            </FlexBetween>
            {/* {isComments && ( */}
            {/* <Box mt="0.5rem">
        {comments.map((comment, i) => (
          <Box key={`${name}-${i}`}>
            <Divider />
            <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
              {comment}
            </Typography>
          </Box>
        ))}
        <Divider />
      </Box> */}
            {/* // )} */}
        </WidgetWrapper>
    );
};

export default PostWidget;
