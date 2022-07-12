class User < ApplicationRecord
    has_secure_password
    has_many :travelers
    validates :name, :email, uniqueness: true
    validates :name, :password_digest, presence: true

    def create
        user = User.create!(user_params)
        session[:current_user] = user.id
        render json: user, status: :created
    end

    def show
        if current_user
          render json: current_user, status: :ok
        else
          render json: "No current session stored", status: :unauthorized
        end
      end
end
