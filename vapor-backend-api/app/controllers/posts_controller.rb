class PostsController < ApplicationController
    def index 
        posts = Post.all
        render json: posts, include: :user
    end

end
