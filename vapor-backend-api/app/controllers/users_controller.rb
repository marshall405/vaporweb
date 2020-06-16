class UsersController < ApplicationController
    def user
        p params
        user = User.find_by(username: params['username'])
        if user
            render json: user, include: :image
        else
            render json: {message: 'User Not Found, Coward.'}
        end
    end

    def create
        user = User.new(username: params[:username], image_id: 1)
        if user.valid?
            user.save
            render json: user
        else
            render json: {
                message: user.errors.messages
            }
        end
    end

end
