class TripTravelersController < ApplicationController
    

    def index
        render json: TripTraveler.all
    end

    def destroy
        trip_traveler = TripTraveler.find(params[:id])
        trip_traveler.destroy
        head :no_content
    end
end
