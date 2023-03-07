import {Badge, Button, Table, Tooltip, Modal, Label, TextInput, Pagination} from 'flowbite-react'
import { useState } from 'react';

import PokemonAppNavbar from '@/components/navbar';
import IconView from '@/components/icons/IconView';
import IconCatch from '@/components/icons/IconCatch';
import IconSearch from '@/components/icons/IconSearch';

export default function Home() {

  const [showModalCreate, setShowModalCreate] = useState(false);

  const dataPokemon = [
    {
      no: 1,
      name: 'Bulbasur',
      isCatched: false
    },
    {
      no: 2,
      name: 'Bulbasur 2',
      isCatched: true
    },
    {
      no: 3,
      name: 'Bulbasur 3',
      isCatched: true
    },
    {
      no: 4,
      name: 'Bulbasur',
      isCatched: false
    },
    {
      no: 5,
      name: 'Bulbasur 5',
      isCatched: false
    },
    {
      no: 6,
      name: 'Bulbasur 6',
      isCatched: false
    },
    {
      no: 7,
      name: 'Bulbasur 7',
      isCatched: false
    },
    {
      no: 8,
      name: 'Bulbasur 8',
      isCatched: false
    },
    {
      no: 9,
      name: 'Bulbasur 9',
      isCatched: false
    },
    {
      no: 10,
      name: 'Bulbasur 46',
      isCatched: false
    },
    
    {
      no: 11,
      name: 'Bulbasur 4r',
      isCatched: false
    },
  ]

  const showModalCreateHandler = () => {
    setShowModalCreate(!showModalCreate);
  }

  const hideModalCreateHandler = () => {
    setShowModalCreate(false);
  }

  return (
    <>
      <PokemonAppNavbar />
      <div className='container mx-auto p-5'>
        <div className='row'>
          <div className='grid grid-cols-12 mt-5 mb-3'>
            <div className='col-span-2'>
              <TextInput
                id="search"
                type="search"
                rightIcon={IconSearch}
                placeholder="Search Pokemon Name"
                required={true}
              />
            </div>
            <div className='col-end-13 col-span-2 flex justify-end'><Button onClick={showModalCreateHandler}>Add New Pokemon</Button></div>
          </div>
        </div>
        <div className='grid-cols-12'>
          <Table>
            <Table.Head>
              <Table.HeadCell style={{width: '2%'}}>
                No.
              </Table.HeadCell>
              <Table.HeadCell style={{width: '75%'}}>
                Name
              </Table.HeadCell>
              <Table.HeadCell style={{width: '8%'}}>
                Catched
              </Table.HeadCell>
              <Table.HeadCell>
                Action
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {dataPokemon.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <Table.Row>
                  <Table.Cell>
                    {item.no}
                  </Table.Cell>
                  <Table.Cell>
                    {item.name}
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex flex-wrap gap-2">
                      {item.isCatched ? <Badge color="success" className='text-center'>Yes</Badge> : <Badge color="failure" className='text-center'>No</Badge>}
                    </div>
                  </Table.Cell>
                  <Table.Cell style={{ display: 'flex', float: 'left' }}>
                    <Tooltip content="View Detail">
                      <IconView style={{ marginRight: '10px', cursor: 'pointer' }}/>
                    </Tooltip>
                    <Tooltip content='Catch this Pokemon!'>
                      <IconCatch style={{cursor: 'pointer'}}/>
                    </Tooltip>
                  </Table.Cell>
                </Table.Row>
              ))}              
            </Table.Body>
          </Table>
          <div className='grid-cols-12'>
            <div className='flex justify-end'>
              <Pagination
                currentPage={1}
                totalPages={100}
                onPageChange={() => console.log('Page Change')}
              />
            </div>
          </div>
          <Modal
              show={showModalCreate}
              size="md"
              popup={true}
              onClose={hideModalCreateHandler}
            >
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                <div className='mb-4'>Create New Pokemon</div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="name"
                      value="Pokemon Name"
                    />
                  </div>
                  <TextInput
                    id="name"
                    placeholder="Input pokemon name"
                    required={true}
                  />
                </div>
                <div className='flex items-end'>
                  <Button color="success" className='mr-2'>Save</Button>
                  <Button color="failure" onClick={hideModalCreateHandler}>Cancel</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  )
}
