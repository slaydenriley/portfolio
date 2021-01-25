class ProjectSerializer
  def initialize(listing_object)
    @listing = listing_object
  end

  def to_serialized_json
    options = {:only => [:id, :name, :link, :description, :user_id]}

    @listing.to_json(options)


  end
end
