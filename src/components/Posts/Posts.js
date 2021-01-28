import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'
import { useLocation } from 'react-router-dom'
import Post from './Post/Post'
import useStyle from './styles'

function Posts({ setCurrentId }) {
    const posts = useSelector((state) => state.posts)//posts from reducers
    const classes = useStyle();

    console.log(posts)

    return (
        <>
            {posts.length ? (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6} md={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
                </Grid>
            ) : <CircularProgress />}
        </>

    )
}

export default Posts

// !posts.length ?  : 