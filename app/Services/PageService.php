<?php



namespace App\Services;
use App\Repositories\PageRepository;
use App\Models\Page;


class PageService
{
    public function __construct(PageRepository $pageRepository)
        {
            $this->pageRepository = $pageRepository;
        }

    public function create(array $data) : void
    {
        $json = json_encode( $data['tags'], JSON_PRETTY_PRINT);
        $data['tags']= $json;
        if ( !$this->pageRepository->getOneWithUserId($data['user_id'])){
            $this->pageRepository->create($data);

        }
    }
    public function getUsersPage(int $userId) : ?Page
    {
        return $this->pageRepository->getOneWithUserId($userId);
    }
    
}