import client from "@/lib";
import { NextResponse } from "next/server";



export async function GET(req, res) {
        try {
          const database = client.db('pocket');
          const posts = database.collection('posts');
            const post = await posts.findOne(post.id);
            console.log(post);
            return NextResponse.json({post})
        } finally {
         await client.close();
     }
}