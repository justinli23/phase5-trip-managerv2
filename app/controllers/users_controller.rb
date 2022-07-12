class UsersController < ApplicationController
    # Group Activity => Set 'authorize_user' to Skip Create Action
    # before_action
    # skip_before_action
    # skip_before_action :is_authorized?, except: [:create]
    # before_action :is_admin?, only: [:update, :destroy]

    # GET "/users/:id"
    def show
        current_user = User.find_by(id: session[:current_user])
        render json: current_user
    end 

    # POST "/users"
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end 

    private 

    def user_params
        params.permit(:name, :email, :password)
    end 

end
