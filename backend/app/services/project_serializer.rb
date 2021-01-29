class ProjectSerializer
  def initialize(listing_object)
    @listing = listing_object
  end

  def to_serialized_json
    options = {
      :only => [
        :id, :name, :description, :user_id, :link],
      include:
        [project_comments: {:only => [:author_name, :author_email, :content, :created_at]}]
    }

    @listing.to_json(options)


  end
end
