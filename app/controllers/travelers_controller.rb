class TravelersController < ApplicationController

    def index
        render json: Traveler.all
    end

    def show
        render json: find_traveler
    end

    def create
        traveler = Traveler.create!(traveler_params)
        render json: traveler, status: :created
    end

    def update
        traveler = find_traveler
        traveler.update!(traveler_params)
        render json: traveler, status: :created
    end

    def destroy
        traveler = find_traveler
        traveler.destroy
        head :no_content
    end

    private

    def find_traveler
        Traveler.find(params[:id])
    end

    def traveler_params
        params.permit(:name, :birthdate, :email, :phone, :notes, :image)
    end
end
