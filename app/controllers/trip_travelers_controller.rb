class TripTravelersController < ApplicationController
    def index
        render json: TripTraveler.all
    end

    def destroy
        trip_traveler = TripTraveler.find(params[:id])
        trip_traveler.destroy
        head :no_content
    end

    def create
        trip_traveler = TripTraveler.create!(trip_traveler_params)
        render json: trip_traveler, status: :created
    end

    private

    def trip_traveler_params
        params.permit(:traveler_id, :trip_id)
    end

end
