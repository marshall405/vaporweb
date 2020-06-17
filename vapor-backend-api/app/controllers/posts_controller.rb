class PostsController < ApplicationController
    def index 
        posts = Post.all
        render json: posts, include: :user
    end

    def show
        post = Post.find_by(id: params[:id])
        post.votes += 1
        post.save
        if post.votes > 9
            post.destroy
        end
        render json: post
    end

    def create
        post = Post.new(user_id: params[:user_id], content: params[:content])
        if post.valid?
            post.save
            render json: post
        else
            render json: {messge: 'something when wrong, try again'}
        end
    end

end
