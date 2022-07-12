class TripsController < ApplicationController
    before_action :is_admin, only: [:destroy]
    def index
        render json: Trip.all
    end

    def show
        render json: find_trip
    end

    def destroy
        trip = find_trip
        trip.destroy
        head :no_content
    end

    def create
        trip = Trip.create!(trip_params)
        render json: trip, status: :created
    end
    
    private

    def trip_params
        params.permit(:name, :start_date, :end_date, :image, :location_id, :activities)
    end

    def find_trip
        Trip.find(params[:id])
    end
end
