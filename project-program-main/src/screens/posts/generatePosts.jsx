import React, { useEffect, useState } from "react";
import { Text, View } from 'react-native';
import { collection, getDocs } from "@firebase/firestore";

import { db } from "../firebase-config";
import { Post } from './post'

const functions = require('firebase-functions');

const admin = require("firebase-admin");
admin.initializeApp();


exports.sendMessage = functions.firestore
    .document('posts/{newPost}')
    .onCreate(event => {

    const docId = event.params.productId;

    const name = event.after.data().name;

    const productRef = admin.firestore().collection('posts').doc(docId)

    return productRef.update({ message: ``})

});

export function PostList() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {

            const querySnapshot = await getDocs(collection(db, "users"));

            // // reset the todo items value
            setPosts([]);

            // // map through the query result and assign the value to the todoItems state
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                setPosts((prev) => [
                    ...prev,
                    {
                        name: data.name,
                    },
                ]);
            });
        } catch (error) {
            alert(error);
        }
        finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    console.log(posts)

    if (loading) {
        return <Text>loading....</Text>
    }

    if (!posts || posts.length === 0) {
        return <Text>no posts</Text>
    }

    return (
        <View>
            {
                posts?.map((item) => <Post name={item.name} />)
            }
        </View>
    );
}