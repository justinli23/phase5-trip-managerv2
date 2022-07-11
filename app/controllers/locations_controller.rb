class LocationsController < ApplicationController

    def index
        render json: Location.all
    end

    def show
        render json: find_location
    end

    def create
        location = Location.create!(location_params)
        render json: location, status: :created
    end
    
    private

    def location_params
        params.permit(:name, :start_date, :end_date, :image)
    end

    def find_location
        Location.find(params[:id])
    end
end
