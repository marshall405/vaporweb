class UsersController < ApplicationController
    def user
        p params
        user = User.find_by(username: params['userName'])
        if user
            render json: :user
        else
            render json: {message: 'User Not Found, Coward.'}
        end
    end
end
