<template>
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="container app">
            <div class="row app-one">
                <div class="col-sm-4 side">
                    <div class="side-one">
                        <div class="row heading justify-content-between">
                            <div class="col-sm-3 col-xs-3 heading-avatar">
                                <div class="heading-avatar-icon">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png">
                                </div>
                            </div>
                            <div class="col-sm-3 ms-0 ps-0">
                                {{ currentUser ? currentUser.user.full_name : 'Loading...' }}
                            </div>
                            <div class="col-sm-2"></div>
                            <div class="col-sm-2 col-xs-2 heading-compose  pull-right facomment">
                                <i class="fa fa-comments fa-2x  pull-right" aria-hidden="true"></i>
                            </div>
                            <div class="col-sm-1 col-xs-1  heading-dot  pull-right">
                                <i class="fa fa-ellipsis-v fa-2x  pull-right open-join" aria-hidden="true"></i>
                            </div>


                        </div>
                        <div class="click-join"
                            style="position: relative; z-index: 2; height: 600px; padding: 50px; border: 3px solid black; display: none;">
                            <form @submit.prevent="createGroup">
                                <div class="mb-3">
                                    <label for="GroupID" class="form-label">Nama Group:</label>
                                    <input v-model="GroupID" class="form-control" id="GroupID" name="GroupID" required />
                                </div>
                                <button type="submit" class="btn btn-success buatGrup">Klik Buat</button>
                            </form>

                            <form @submit.prevent="fetchUserID" class="mt-5">
                                <div class="mb-3">
                                    <label for="JoinGroupID" class="form-label">GroupID:</label>
                                    <input v-model="JoinGroupID" class="form-control" id="JoinGroupID" name="JoinGroupID"
                                        required />
                                </div>
                                <button type="submit" class="btn btn-success">Join Grup</button>
                            </form>

                            <form @submit.prevent="addFriend" class="mt-5">
                                <div class="mb-3">
                                    <label for="FriendID" class="form-label">ID_USER Yang Ingin Di Add:</label>
                                    <input v-model="FriendID" class="form-control" id="FriendID" name="FriendID" required />
                                </div>
                                <button type="submit" class="btn btn-success">ADD FRIEND</button>
                            </form>

                        </div>

                        <div class="row searchBox">
                            <div class="col-sm-12 searchBox-inner">
                                <div class="form-group has-feedback">
                                    <input id="searchText" type="text" class="form-control" name="searchText"
                                        placeholder="Search">
                                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                </div>
                            </div>
                        </div>


                        <!-- <ul class="list-unstyled chat-list mt-2 mb-0">
                  <li v-for="group in allGroups.docs" :key="group.id" class="clearfix" v-if="isUserInGroup(group)">
                    <div class="btn btn-primary">{{ group.ChannelID }}</div>
                  </li>
                </ul> -->


                        <div class="row sideBar">
                            <ul class="list-unstyled chat-list mb-0">
                                <h2>GROUP</h2>
                                <li v-for="group in allGroups" :key="group.id" @click="selectGroup(group.id)">
                                    <div class="row sideBar-body">
                                        <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                            <div class="avatar-icon">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png">
                                            </div>
                                        </div>
                                        <div class="col-sm-9 col-xs-9 sideBar-main">
                                            <div class="row">
                                                <div class="col-sm-8 col-xs-8 sideBar-name">
                                                    <span class="name-meta">{{ group.GroupID }}</span>
                                                </div>
                                                <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                                    <span class="time-meta pull-right">18:18</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <ul class="list-unstyled chat-list mb-0">
                                <h2>FRIEND</h2>
                                <li v-for="friendd in allFriends" :key="friendd.id" @click="selectfriend(friendd.id)">
                                    <div class="row sideBar-body">
                                        <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                            <div class="avatar-icon">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png">
                                            </div>
                                        </div>
                                        <div class="col-sm-9 col-xs-9 sideBar-main">
                                            <div class="row">
                                                <div class="col-sm-8 col-xs-8 sideBar-name">
                                                    <span class="name-meta">{{ friendd.idteman }}</span>
                                                </div>
                                                <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                                    <span class="time-meta pull-right">18:18</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>



                        </div>


                        <!-- <div class="row sideBar">
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>

                    <div class="side-two">
                        <div class="row newMessage-heading">
                            <div class="row newMessage-main">
                                <div class="col-sm-2 col-xs-2 newMessage-back">
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                </div>
                                <div class="col-sm-10 col-xs-10 newMessage-title">
                                    New Chat
                                </div>
                            </div>
                        </div>

                        <div class="row composeBox">
                            <div class="col-sm-12 composeBox-inner">
                                <div class="form-group has-feedback">
                                    <input id="composeText" type="text" class="form-control" name="searchText"
                                        placeholder="Search People">
                                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                </div>
                            </div>
                        </div>

                        <div class="row compose-sideBar">
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sideBar-body">
                                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                    <div class="avatar-icon">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png">
                                    </div>
                                </div>
                                <div class="col-sm-9 col-xs-9 sideBar-main">
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-8 sideBar-name">
                                            <span class="name-meta">John Doe
                                            </span>
                                        </div>
                                        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                            <span class="time-meta pull-right">18:18
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-8 conversation">
                    <div class="row heading">
                        <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                            <div class="heading-avatar-icon">
                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png">
                            </div>
                        </div>
                        <div class="col-sm-8 col-xs-7 heading-name">
                            <a class="heading-name-meta">{{ currGroupID }}
                            </a>
                            <span class="heading-online">Online</span>
                        </div>
                        <div class="col-sm-2 col-xs-1  heading-dot pull-right">
                            <i class="fa fa-ellipsis-v fa-2x  pull-right logout" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div class="rows message" id="conversation">

                        <ul class="list-unstyled">
                            <li class="clearfix" v-for="chat in chatHistory" :key="chat.id">
                                <div class="row message-body">
                                    <div class="col-sm-12 message-main-receiver">
                                        <div class="receiver">
                                            <div class="header-text mt-5">
                                                <h5>{{ chat.UserFullName }}</h5>
                                            </div>
                                            <div class="message-text">
                                                <p> {{ chat.content }} </p>
                                            </div>
                                            <span class="message-time pull-right">
                                                Sun
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>

                        <ul class="list-unstyled">
                            <li class="clearfix" v-for="Friend in chatHistoryFriend" :key="Friend.id">
                                <div class="row message-body">
                                    <div class="col-sm-12 message-main-receiver">
                                        <div class="receiver">
                                            <div class="header-text mt-5">
                                                <h5>{{ Friend.UserID }}</h5>
                                            </div>
                                            <div class="message-text">
                                                <p> {{ Friend.chat }} </p>
                                            </div>
                                            <span class="message-time pull-right">
                                                Sun
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>


                        <!-- <div class="row message-body">
                            <div class="col-sm-12 message-main-sender">
                                <div class="sender">
                                    <div class="message-text">
                                        I am doing nothing man!
                                    </div>
                                    <span class="message-time pull-right">
                                        Sun
                                    </span>
                                </div>
                            </div>
                        </div>-->
                    </div>
                    <form @submit.prevent="handleFormSubmit">
                        <div class="row reply">
                            <div class="col-sm-1 col-xs-1 reply-emojis">
                                <i class="fa fa-smile-o fa-2x"></i>
                            </div>
                            <div class="col-md-9 col-xs-9 reply-main">
                                <label for="message" style="display: none;">Message:</label>
                                <textarea v-model="message" class="form-control" id="message" name="message"
                                    rows="1"></textarea>
                            </div>
                            <div class=" col-sm-1 col-xs-1 reply-recording">
                                <i class="fa fa-microphone fa-2x" aria-hidden="true"></i>
                            </div>
                            <div class="col-sm-1 col-xs-1 reply-send">
                                <button type="submit m-5" style="border: none;">
                                    <i class="fa fa-send fa-2x p-5" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

function handleFormSubmit() {
    if (currFriendID !== null) {
        sendMessageFriend();
    }
    if (currGroupID !== null) {
        sendMessage();
    }
}
// document.getElementById("buatGrup").addEventListener("click", function () {
//     joinGroup();
// });

const fetchUserID = async () => {
    try {
        const res = await fetch(
            "http://localhost:3100/api/groups/" + JoinGroupID.value,
            {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (res.status === 401) {
            console.error("Unauthorized: Invalid credentials");
        } else {
            const json = await res.json();

            // Tambahkan pengecekan currUser.user
            if (currentUser.value && currentUser.value.user) {
                const userIds = json.UserID.map((user) => user.id);

                // Gunakan .value untuk menambahkan elemen ke array ref
                allUserID.value.push(...userIds, currentUser.value.user.id);
                console.log(allUserID.value);

                await joinGroup();
            } else {
                console.error("Error: currUser or currUser.user is undefined");
            }
        }
    } catch (error) {
        console.error("Error:", error);
    }
};


const buatGrup = document.querySelector(".buatGrup");
console.log(buatGrup);
document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".open-join").addEventListener("click", function () {
        console.log("button clicked");
        if (document.querySelector(".click-join").style.display === "block") {
            document.querySelector(".click-join").style.display = "none";
        }
        else {
            document.querySelector(".click-join").style.display = "block";
        }
    });

    // console.log(openJoin);
})


const fetchAllGroups = async () => {
    try {
        const res = await fetch('http://localhost:3100/api/groups', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            const errorMsg = (await res.json())?.errors[0].message;
            throw new Error(errorMsg);
        }

        const groups = await res.json();
        console.log(groups);
        //allGroups.value = groups; // Update the allGroups ref with the fetched groups
        // Filter groups based on whether currentUser is a member
        allGroups.value = groups.docs.filter(group =>
            group.UserID.some(user => user.id === currentUser.value.user.id)
        );
        console.log(allGroups.value)
    } catch (error) {
        console.error("Error during fetchAllGroups:", error);
    }
};

const fetchALLUsers = async () => {
    try {
        const res = await fetch('http://localhost:3100/api/Users', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            const errorMsg = (await res.json())?.errors[0].message;
            throw new Error(errorMsg);
        }

        const groups = await res.json();
        console.log(groups);
        ALLusers.value = groups; // Update the allGroups ref with the fetched groups
        // Filter groups based on whether currentUser is a member
        // allGroups.value = groups.docs.filter(group =>
        //     group.UserID.some(user => user.id === currentUser.value.user.id)
        // );
        // console.log(allGroups.value)
    } catch (error) {
        console.error("Error during fetchAllGroups:", error);
    }
};

document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    document.querySelector(".heading-compose").addEventListener("click", function () {
        document.querySelector(".side-two").style.left = "0";
    });

    document.querySelector(".newMessage-back").addEventListener("click", function () {
        document.querySelector(".side-two").style.left = "-100%";
    });
});

import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router"
const router = useRouter();
const currentUser = ref();
const GroupID = ref("");
const JoinGroupID = ref("");
const allUserID = ref([]);
const message = ref("");
const allGroups = ref([]);
const chatHistory = ref([]);
const chatHistoryFriend = ref([]);
const currGroupID = ref("");
const FriendID = ref("");
const ALLusers = ref([]);
const currFriendID = ref("");
const allFriends = ref([]);
// onBeforeMount(async () => {
//     currentUser.value = await getUser();
// })

const fetchAllFriend = async () => {
    try {
        const res = await fetch('http://localhost:3100/api/Friend', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            const errorMsg = (await res.json())?.errors[0].message;
            throw new Error(errorMsg);
        }

        const Friends = await res.json();

        allFriends.value = Friends.docs
            .filter(Friend => Friend.User1ID === currentUser.value.user.id || Friend.User2ID === currentUser.value.user.id)
            .map(Friend => {
                const isCurrentUser1 = Friend.User1ID === currentUser.value.user.id;
                const idteman = isCurrentUser1 ? Friend.User2ID : Friend.User1ID;
                return {
                    ...Friend,
                    idteman,
                };
            });

        console.log(allFriends.value);
    } catch (error) {
        console.error("Error during fetchAllGroups:", error);
    }
};

const addFriend = async () => {
    try {
        const req = await fetch('http://localhost:3100/api/Friend', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                User1ID: currentUser.value.user.id,
                User2ID: FriendID.value,
            }),
        });
        const data = await req.json();
        console.log(data);

        // Handle response if needed
    } catch (error) {
        console.error("Error during createChannel:", error);
        alert("Error creating channel: " + error.message);
    }
};

console.log(currentUser);

onMounted(async () => {
    currentUser.value = await getUser();
    if (!currentUser.value) {
        router.replace("/")
    }
    console.log(currentUser.value);
    await fetchAllGroups();
    await fetchAllFriend();
});

const getUser = async () => {
    try {
        const res = await fetch('http://localhost:3100/api/Users/me', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!res.ok) {
            const errorMsg = (await res.json())?.errors[0].message;
            throw new Error(errorMsg)
        }
        const user = (await res.json());
        return user;
    } catch (error) {
        alert("Login Error " + error.message)
    }
}


const fetchChatHistory = async (groupId) => {
    try {
        currGroupID.value = groupId;

        const res = await fetch(
            "http://localhost:3100/api/chats?where[GroupID][equals]=" + groupId,
            {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (res.status === 401) {
            console.error("Unauthorized: Invalid credentials");
        } else {
            const json = await res.json();
            console.log(json);
            chatHistory.value = json.docs;
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

const sendMessage = async () => {
    try {
        const res = await fetch("http://localhost:3100/api/chats", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                UserID: currentUser.value.user.id,
                UserFullName: currentUser.value.user.full_name,
                GroupID: currGroupID.value,
                content: message.value,
            }),
        });

        if (res.status === 401) {
            console.error("Unauthorized: Invalid credentials");
        } else {
            console.log(message.value);
            const json = await res.json();
            console.log(json);
            // Update chat history setelah mengirim pesan
            await fetchChatHistory();
        }
    } catch (error) {
        console.error("Error:", error);
    }
};


const fetchChatHistoryFriend = async (FriendID) => {
    try {
        currFriendID.value = FriendID;

        const res = await fetch(
            "http://localhost:3100/api/FriendChat?where[FriendID][equals]=" + FriendID,
            {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (res.status === 401) {
            console.error("Unauthorized: Invalid credentials");
        } else {
            const json = await res.json();
            console.log(json);

            chatHistoryFriend.value = json.docs.map(chat => ({
                ...chat,
                createdAt: new Date(chat.createdAt),
            }));
            console.log(chatHistoryFriend);
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

const sendMessageFriend = async () => {
    try {
        const res = await fetch("http://localhost:3100/api/FriendChat", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                UserID: currentUser.value.user.id,
                FriendID: currFriendID.value,
                chat: message.value,
            }),
        });

        if (res.status === 401) {
            console.error("Unauthorized: Invalid credentials");
        } else {
            console.log(message.value);
            const json = await res.json();
            console.log(json);
            // Update chat history setelah mengirim pesan
            await fetchChatHistoryFriend();
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

const selectGroup = (groupId) => {
    // Panggil fungsi fetchChatHistory dengan ID grup yang dipilih

    fetchChatHistory(groupId);
};

const selectfriend = (userid) => {

    // Panggil fungsi fetchChatHistory dengan ID grup yang dipilih
    fetchChatHistoryFriend(userid);
};




const joinGroup = async () => {
    try {
        const res = await fetch(
            "http://localhost:3100/api/groups/" + JoinGroupID.value,
            {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    UserID: allUserID.value,
                }),
            }
        );

        if (res.status === 401) {
            console.error("Unauthorized: Invalid credentials");
        } else {
            const json = await res.json();
            console.log(json);
            //await store.dispatch("updateJoinGroupID", JoinGroupID.value);
            //return json;
        }
    } catch (error) {
        console.error("Error:", error);
    }
};


const createGroup = async () => {
    console.log(currentUser.value.id);
    try {
        const req = await fetch('http://localhost:3100/api/groups', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                UserID: currentUser.value.user.id,
                GroupID: GroupID.value,
            }),
        });
        console.log(GroupID);
        const data = await req.json();
        console.log(data);

        // Handle response if needed
    } catch (error) {
        console.error("Error during createGroup:", error);
        alert("Error creating channel: " + error.message);
    }
};



function addClickListener(element) {
    // Add click event listener to the specified element
    element.addEventListener('click', function (event) {
        // Log a message to the console when the button is clicked
        console.log('Button clicked!');
        logout();
    });
}



// Example usage:
document.addEventListener('DOMContentLoaded', function () {
    const buttonElement = document.querySelector('.logout');
    //console.log(buttonElement);
    addClickListener(buttonElement);
});

const logout = async () => {
    try {
        const res = await fetch('http://localhost:3100/api/Users/logout', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!res.ok) {
            const errorMsg = (await res.json())?.errors[0].message;
            throw new Error(errorMsg)
        }
        const user = await res.json();
        console.log(user);
        router.push('/');
    } catch (error) {
        alert("Sing Up Error " + error.message)
    }
}


</script>   
<style >
html,
body,
div,
span {
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.facomment {
    margin-right: 0px;
}




body {
    background: url("https://www.bootdey.com/img/bgy.png") no-repeat fixed center;
    background-size: cover;
}

.fa-2x {
    font-size: 1.5em;
}

.app {
    position: relative;
    overflow: hidden;
    top: 19px;
    height: calc(100% - 38px);
    margin: auto;
    padding: 0;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .06), 0 2px 5px 0 rgba(0, 0, 0, .2);
}

.app-one {
    background-color: #f7f7f7;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .06), 0 2px 5px 0 rgba(0, 0, 0, .2);
}

.side {
    padding: 0;
    margin: 0;
    height: 100%;
}

.side-one {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    position: relative;
    display: block;
    top: 0;
    justify-content: space-between;
}

.side-two {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    position: relative;
    top: -100%;
    left: -100%;
    -webkit-transition: left 0.3s ease;
    transition: left 0.3s ease;

}


.heading {
    padding: 10px 16px 10px 15px;
    margin: 0;
    height: 60px;
    width: 100%;
    background-color: #eee;
    z-index: 1000;
}

.heading-avatar {
    padding: 0;
    cursor: pointer;

}

.heading-avatar-icon img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
}

.heading-name {
    padding: 0 !important;
    cursor: pointer;
}

.heading-name-meta {
    font-weight: 700;
    font-size: 100%;
    padding: 5px;
    padding-bottom: 0;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #000;
    display: block;
}

.heading-online {
    display: none;
    padding: 0 5px;
    font-size: 12px;
    color: #93918f;
}

.heading-compose {
    padding: 0;
}

.heading-compose i {
    text-align: center;
    padding: 5px;
    color: #93918f;
    cursor: pointer;
}

.heading-dot {
    padding: 0;
    margin-left: 10px;
}

.heading-dot i {
    text-align: right;
    padding: 5px;
    color: #93918f;
    cursor: pointer;
}

.searchBox {
    padding: 0 !important;
    margin: 0 !important;
    height: 60px;
    width: 100%;
}

.searchBox-inner {
    height: 100%;
    width: 100%;
    padding: 10px !important;
    background-color: #fbfbfb;
}


/*#searchBox-inner input {
  box-shadow: none;
}*/

.searchBox-inner input:focus {
    outline: none;
    border: none;
    box-shadow: none;
}

.sideBar {
    padding: 0 !important;
    margin: 0 !important;
    background-color: #fff;
    overflow-y: auto;
    border: 1px solid #f7f7f7;
    height: calc(100% - 120px);
}

.sideBar-body {
    position: relative;
    padding: 10px !important;
    border-bottom: 1px solid #f7f7f7;
    height: 72px;
    margin: 0 !important;
    cursor: pointer;
}

.sideBar-body:hover {
    background-color: #f2f2f2;
}

.sideBar-avatar {
    text-align: center;
    padding: 0 !important;
}

.avatar-icon img {
    border-radius: 50%;
    height: 49px;
    width: 49px;
}

.sideBar-main {
    padding: 0 !important;
}

.sideBar-main .row {
    padding: 0 !important;
    margin: 0 !important;
}

.sideBar-name {
    padding: 10px !important;
}

.name-meta {
    font-size: 100%;
    padding: 1% !important;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #000;
}

.sideBar-time {
    padding: 10px !important;
}

.time-meta {
    text-align: right;
    font-size: 12px;
    padding: 1% !important;
    color: rgba(0, 0, 0, .4);
    vertical-align: baseline;
}

/*New Message*/

.newMessage {
    padding: 0 !important;
    margin: 0 !important;
    height: 100%;
    position: relative;
    left: -100%;
}

.newMessage-heading {
    padding: 10px 16px 10px 15px !important;
    margin: 0 !important;
    height: 100px;
    width: 100%;
    background-color: #00bfa5;
    z-index: 1001;
}

.newMessage-main {
    padding: 10px 16px 0 15px !important;
    margin: 0 !important;
    height: 60px;
    margin-top: 30px !important;
    width: 100%;
    z-index: 1001;
    color: #fff;
}

.newMessage-title {
    font-size: 18px;
    font-weight: 700;
    padding: 10px 5px !important;
}

.newMessage-back {
    text-align: center;
    vertical-align: baseline;
    padding: 12px 5px !important;
    display: flex;
    cursor: pointer;
}

.newMessage-back i {
    margin: auto !important;
}

.composeBox {
    padding: 0 !important;
    margin: 0 !important;
    height: 60px;
    width: 100%;
}

.composeBox-inner {
    height: 100%;
    width: 100%;
    padding: 10px !important;
    background-color: #fbfbfb;
}

.composeBox-inner input:focus {
    outline: none;
    border: none;
    box-shadow: none;
}

.compose-sideBar {
    padding: 0 !important;
    margin: 0 !important;
    background-color: #fff;
    overflow-y: auto;
    border: 1px solid #f7f7f7;
    height: calc(100% - 160px);
}

/*Conversation*/

.conversation {
    padding: 0 !important;
    margin: 0 !important;
    height: 100%;
    /*width: 100%;*/
    border-left: 1px solid rgba(0, 0, 0, .08);
    /*overflow-y: auto;*/
}

.message {
    padding: 0 !important;
    margin: 0 !important;

    background-size: cover;
    overflow-y: auto;
    border: 1px solid #f7f7f7;
    height: calc(100% - 120px);
}

.message-previous {
    margin: 0 !important;
    padding: 0 !important;
    height: auto;
    width: 100%;
}

.previous {
    font-size: 15px;
    text-align: center;
    padding: 10px !important;
    cursor: pointer;
}

.previous a {
    text-decoration: none;
    font-weight: 700;
}

.message-body {
    margin: 0 !important;
    padding: 0 !important;
    width: auto;
    height: auto;
}

.message-main-receiver {
    /*padding: 10px 20px;*/
    max-width: 60%;
}

.message-main-sender {
    padding: 3px 20px !important;
    margin-left: 40% !important;
    max-width: 60%;
}

.message-text {
    margin: 0 !important;
    padding: 5px !important;
    word-wrap: break-word;
    font-weight: 200;
    font-size: 14px;
    padding-bottom: 0 !important;
}

.message-time {
    margin: 0 !important;
    margin-left: 50px !important;
    font-size: 12px;
    text-align: right;
    color: #9a9a9a;

}

.receiver {
    width: auto !important;
    padding: 4px 10px 7px !important;
    border-radius: 10px 10px 10px 0;
    background: #ffffff;
    font-size: 12px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    word-wrap: break-word;
    display: inline-block;
}

.sender {
    float: right;
    width: auto !important;
    background: #dcf8c6;
    border-radius: 10px 10px 0 10px;
    padding: 4px 10px 7px !important;
    font-size: 12px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .2);

    word-wrap: break-word;
}


/*Reply*/

.reply {
    height: 60px;
    width: 100%;
    background-color: #f5f1ee;
    padding: 10px 5px 10px 5px !important;
    margin: 0 !important;
    z-index: 1000;
}

.reply-emojis {
    padding: 5px !important;
}

.reply-emojis i {
    text-align: center;
    padding: 5px 5px 5px 5px !important;
    color: #93918f;
    cursor: pointer;
}

.reply-recording {
    padding: 5px !important;
}

.reply-recording i {
    text-align: center;
    padding: 5px !important;
    color: #93918f;
    cursor: pointer;
}

.reply-send {
    padding: 5px !important;
}

.reply-send i {
    text-align: center;
    padding: 5px !important;
    color: #93918f;
    cursor: pointer;
}

.reply-main {
    padding: 2px 5px !important;
}

.reply-main textarea {
    width: 100%;
    resize: none;
    overflow: hidden;
    padding: 5px !important;
    outline: none;
    border: none;
    text-indent: 5px;
    box-shadow: none;
    height: 100%;
    font-size: 16px;
}

.reply-main textarea:focus {
    outline: none;
    border: none;
    text-indent: 5px;
    box-shadow: none;
}

@media screen and (max-width: 700px) {
    .app {
        top: 0;
        height: 100%;
    }

    .heading {
        height: 70px;
        background-color: #009688;
    }

    .fa-2x {
        font-size: 2.3em !important;
    }

    .heading-avatar {
        padding: 0 !important;
    }

    .heading-avatar-icon img {
        height: 50px;
        width: 50px;
    }

    .heading-compose {
        padding: 5px !important;
    }

    .heading-compose i {
        color: #fff;
        cursor: pointer;
    }

    .heading-dot {
        padding: 5px !important;
        margin-left: 10px !important;
    }

    .heading-dot i {
        color: #fff;
        cursor: pointer;
    }

    .sideBar {
        height: calc(100% - 130px);
    }

    .sideBar-body {
        height: 80px;
    }

    .sideBar-avatar {
        text-align: left;
        padding: 0 8px !important;
    }

    .avatar-icon img {
        height: 55px;
        width: 55px;
    }

    .sideBar-main {
        padding: 0 !important;
    }

    .sideBar-main .row {
        padding: 0 !important;
        margin: 0 !important;
    }

    .sideBar-name {
        padding: 10px 5px !important;
    }

    .name-meta {
        font-size: 16px;
        padding: 5% !important;
    }

    .sideBar-time {
        padding: 10px !important;
    }

    .time-meta {
        text-align: right;
        font-size: 14px;
        padding: 4% !important;
        color: rgba(0, 0, 0, .4);
        vertical-align: baseline;
    }

    /*Conversation*/
    .conversation {
        padding: 0 !important;
        margin: 0 !important;
        height: 100%;
        /*width: 100%;*/
        border-left: 1px solid rgba(0, 0, 0, .08);
        /*overflow-y: auto;*/
    }

    .message {
        height: calc(100% - 140px);
    }

    .reply {
        height: 70px;
    }

    .reply-emojis {
        padding: 5px 0 !important;
    }

    .reply-emojis i {
        padding: 5px 2px !important;
        font-size: 1.8em !important;
    }

    .reply-main {
        padding: 2px 8px !important;
    }

    .reply-main textarea {
        padding: 8px !important;
        font-size: 18px;
    }

    .reply-recording {
        padding: 5px 0 !important;
    }

    .reply-recording i {
        padding: 5px 0 !important;
        font-size: 1.8em !important;
    }

    .reply-send {
        padding: 5px 0 !important;
    }

    .reply-send i {
        padding: 5px 2px 5px 0 !important;
        font-size: 1.8em !important;
    }
}
</style>
