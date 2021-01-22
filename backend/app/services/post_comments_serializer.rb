class PostCommentsSerializer
  def initialize(listing_object)
    @listing = listing_object
  end

  def to_serialized_json
    options = {:only => [:author_name, :author_email, :content, :post_id]}

    @listing.to_json(options)


  end
end
